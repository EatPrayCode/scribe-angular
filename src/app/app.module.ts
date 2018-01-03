import { MessageService } from './services/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as firebase from 'firebase';

// Pipes
import { DateFormatPipe } from './services/date.pipe';

// Services
import { PostsService } from './services/posts.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UploadService } from './services/upload.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import { UserInfoHomeComponent } from './user-info-home/user-info-home.component';
import { GroupComponent } from './group/group.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ChatroomComponent } from './messaging/chatroom/chatroom.component';
import { RoomListComponent } from './messaging/room-list/room-list.component';


firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    UserInfoComponent,
    FooterComponent,
    PostsComponent,
    ProfileComponent,
    AccountComponent,
    AddPostComponent,
    PostComponent,
    DateFormatPipe,
    SearchComponent,
    UserInfoHomeComponent,
    GroupComponent,
    MessagingComponent,
    ChatroomComponent,
    RoomListComponent,
    ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fire-project'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user/:username',
        component: ProfileComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'post/:pid',
        component: PostComponent
      },
      {
        path: 'group/:gid',
        component: GroupComponent
      },
      {
        path: 'messages',
        component: MessagingComponent
      },
      {
        path: '**',
        redirectTo: '/home'
      }
    ])
  ],
  providers: [
    PostsService,
    AuthService,
    UserService,
    UploadService,
    MessageService,
    DateFormatPipe,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PostComponent,
  ]
})
export class AppModule { }

