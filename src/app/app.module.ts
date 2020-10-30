import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {JoditAngularModule} from 'jodit-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule, Routes} from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  {path: '', component:  AppHeaderComponent},
  {path: 'comment', component:  CommentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    JoditAngularModule,
    EditorModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
