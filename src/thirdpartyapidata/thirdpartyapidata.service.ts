import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class ThirdpartyapidataService {
    constructor(private httpService: HttpService) {

    }


    getUser(params: { username: string }) {
        return this.httpService
            .get(`http://api.github.com/users/${params.username}`)
            .pipe(
                map((response) => response.data),
                map((data) => ({
                    avatar_url: data.avatar_url,
                    bio: data.bio,
                    followers: data.followers,
                    following: data.following,
                    public_repos: data.public_repos,
                    username: data.login,
                    name: data.name
                }))
            );
    }


    getAlldata() {
        return this.httpService
            .get('https://fakestoreapi.com/products')
            .pipe(
                map((response) => response.data),
                map((data) => data.filter((product) => product.id % 2 === 0).map((product) => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.image
                }))),

            );
    }
}
