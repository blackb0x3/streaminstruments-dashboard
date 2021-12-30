import { Injectable, OnDestroy } from '@angular/core';
import axios from 'axios';
import {
  from,
  Observable,
  Subject
} from 'rxjs';
import { Rule } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class StreamInstrumentsApiService implements OnDestroy {
  destroy$ = new Subject();

  async fetchRulesAsync(): Promise<Observable<Rule>> {
    try {
      const fetchRulesResponse = await axios.get('https://localhost:5001/Rules');

      if (fetchRulesResponse.status != 200) {
        throw new Error(`FetchRules endpoint returned ${fetchRulesResponse.status} ${fetchRulesResponse.statusText} response`);
      }

      console.debug(fetchRulesResponse.data);
      const mappedRules = fetchRulesResponse.data.content.rules as Rule[];

      return from(mappedRules);
    } catch (e) {
      if (typeof e === 'string') {
        console.log(e);
        throw new Error(e.toUpperCase())
      } else if (e instanceof Error) {
          console.log(e.message);
          throw e;
      }
      else {
        console.log(e);
        throw new Error(`${e}`);
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
