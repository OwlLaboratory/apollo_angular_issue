import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache, IntrospectionFragmentMatcher} from 'apollo-cache-inmemory';
import {GraphQLschema} from './graphql/schema';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const fragmentMatcher = new IntrospectionFragmentMatcher({
      introspectionQueryResultData: GraphQLschema
    });
    apollo.create({
      // By default, this client will send queries to the
      // `/graphql` endpoint on the same host
      link: httpLink.create({uri: 'https://api.report.gouy-elliot.com/'}),
      cache: new InMemoryCache({ fragmentMatcher }),
      defaultOptions: {
        query: {
          notifyOnNetworkStatusChange: true
        },
        watchQuery: {
          errorPolicy: 'all'
        }
      }
    });
  }
}
