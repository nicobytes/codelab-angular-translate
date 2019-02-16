[![Imgur](https://i.imgur.com/0i3fA0X.png)](https://youtu.be/bVIH8f0Oyv0)

```
npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader --save
```

```
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
````

```
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
```

```
HttpClientModule,
TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
})
```

```
import {TranslateService} from '@ngx-translate/core';

export class AppComponent {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
```

en.json
```
{
  "HELLO": "hello world"
}
```

es.json
```
{
  "HELLO": "hola mundo"
}
```

```
<div>{{ 'HELLO' | translate }}</div>
```

```
translate.get('HELLO')
.subscribe((res: string) => {
  console.log(res);
  //=> 'hello world'
});
```

```
export class AppComponent {
  title = 'angular-translate';
  langs: string[] = [];

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
```

````
<label>
  change
  <select #langSelect (change)="changeLang(langSelect.value)">
    <option *ngFor="let lang of langs" [value]="lang">
      {{ lang }}
    </option>
  </select>
</label>
````


```
<div>{{ 'GREETING' | translate:{name:'nicolas'} }}</div>
```

````
"GREETING": "Hello {{name}}, nice to meet you."
"GREETING": "Hola {{name}}, un gusto conocerte."
```

````
this.translate.stream('GREETING', {name: 'nicolas'})
.subscribe((res: string) => {
  console.log(res);
});
```

```
"GREETING": "Hello  <strong>{{name}}</strong>, nice to meet you.",
"GREETING": "Hola <strong>{{name}}</strong>, un gusto conocerte."
```

```
<div [innerHTML]="'GREETING' | translate:{name: 'nicolas'}"></div>
```
```
import { TranslateModule } from '@ngx-translate/core';
```
