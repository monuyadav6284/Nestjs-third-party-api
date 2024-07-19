import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

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
}
