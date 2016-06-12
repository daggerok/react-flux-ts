import { AuthorDTO } from './AuthorDTO';

/**
 * Created by mak on 6/12/16.
 */
export class AuthorService {
  public static findAll(ok: (data: AuthorDTO[]) => any,
                        err?: (req: any, status: any, err: any) => any): any {

    return $.ajax('/author')
      .then((data: AuthorDTO[]) =>
        ok(data))
      .fail((req: any, status: any, err: any) =>
        console.log('shit happens.. =[', status));
  }
}
