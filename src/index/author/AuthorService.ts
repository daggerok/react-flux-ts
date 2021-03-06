import { AuthorDTO } from './AuthorDTO';
import { AuthorList } from './AuthorList';

/**
 * Created by mak on 6/12/16.
 */
const URL = '/author';

export class AuthorService {

  public static findAllOtherWay(authorList: AuthorList): any {

    $.get(URL)
      .then((data: AuthorDTO[]) => authorList.setState({authors: data}))
      .fail(AuthorService.errorLogger);
  }

  /**
   * usage:
   *
   * AuthorService.findAll(
   *  (data: AuthorDTO[]) => okHandler(data),
   *  (jqXHR: XMLHttpRequest) => failHandler(jqXHR)
   * );
   *
   * @param ok - then handler.
   * @param err - fail handler.
   * @returns {JQueryPromise<any>} jquery promise with payload.
   */
  public static findAll(ok: (data: AuthorDTO[]) => any,
                        err?: (jqXHR: XMLHttpRequest) => any): any {

    return $.get(URL)
      .then(ok).fail(err || AuthorService.errorLogger);
  }

  /**
   * used in order to fail handler wasn't provided.
   *
   * @param jqXHR - error response.
   */
  public static errorLogger = (jqXHR: XMLHttpRequest, status: any, error: any) =>
    console.error(jqXHR.responseText);
}
