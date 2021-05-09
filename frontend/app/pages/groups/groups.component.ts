import { Component, OnInit } from "@angular/core";
import { GroupService } from '../../services/group.service';

@Component({
  selector: "app-groups",
  templateUrl: "groups.component.html"
})
export class GroupsComponent implements OnInit {
  allGroups;

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getGroups().subscribe(res => {
      this.allGroups = res;
      console.log('***: ', res);
    })
  }
}
