import {Component, OnInit} from '@angular/core';
import {User} from "../controller/modal/user.model";
import {UserService} from "../controller/service/user.service";

@Component({
  selector: 'app-usedash',
  templateUrl: './usedash.component.html',
  styleUrls: ['./usedash.component.css']
})
export class UsedashComponent implements OnInit {


  protected readonly User = User;


  // Déclarez la propriété 'users' comme un tableau d'objets 'User'
  users: User[] = [];
  surSite: number = 0;
  teleTravail: number = 0;
  enConge: number = 0;
  status: string = '';
  date: string ='';
  firstName: String ='';
  lastName: String='';
  search: String='';
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    // Assignez les données à la propriété 'users' lorsque les données sont récupérées
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
    this.userService.countByStatus("site").subscribe((data: number) => {
      this.surSite = data;
      console.log('surSite ' + data)
    });
    this.userService.countByStatus("teletravail").subscribe((data: number) => {
      this.teleTravail = data;
      console.log('teletravail ' + data)

    });
    this.userService.countByStatus("conge").subscribe((data: number) => {
      this.enConge = data;
      console.log('conge ' + data)

    });

      this.userService.getUsers()
        .subscribe(res => {
          this.users = res
          console.log(res)
        })


  }




  findByFirstNameAndLastName() {
    console.log(this.firstName)
    console.log(this.lastName)
  }
}
