import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_servives/user.service';
import { AlertifyService } from 'src/app/_servives/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { AuthService } from 'src/app/_servives/auth.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('memberTabs', { static: true }) memberTabs: TabsetComponent;
  user: User;
  currentSlideIndex: number;
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.user = data.user;
      this.currentSlideIndex = 0;
    });

    this.route.queryParams.subscribe((params) => {
      const selectedTab = params.tab;
      this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
    });
  }
  selectTab(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
  }
  sendLike(id: number) {
    this.userService
      .sendLike(this.authService.decodedToken.nameid, id)
      .subscribe(
        (data) => {
          this.alertify.success('You have liked: ' + this.user.username);
        },
        (error) => {
          this.alertify.error(error);
        }
      );
  }
  currentSlide(index: number) {
    this.currentSlideIndex = index;
  }
  pushSlide(index: number) {
    this.currentSlideIndex += index;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.user.photos.length - 1;
    } else if (this.currentSlideIndex > this.user.photos.length - 1) {
      this.currentSlideIndex = 0;
    }
  }
}
