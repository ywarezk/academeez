import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageModule } from 'src/message/message.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MessageModule.forRoot({
      message: 'hello world',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
