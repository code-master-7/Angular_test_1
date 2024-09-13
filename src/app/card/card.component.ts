import { Component } from '@angular/core';
import { CardDataModule } from '../card-data-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  editDialogVisibility: boolean = false;

  currentEditingId = -1;
  userProfileName = 'hii';
  selectedOrg = 'be';
  userProfileUrl = 'Some url';
  userProfileDes = 'some des';
  userSelectedSocial = ['fb', 'gmail', 'twiter', 'linked', 'spear']; // temp data

  AllSocialLinks = ['fb', 'gmail', 'twiter', 'linked', 'spear'];

  MapForNames(id: string) {
    switch (id) {
      case 'fb':
        return 'Facebook';
      case 'gmail':
        return 'Gmail';
      case 'twiter':
        return 'Twitter';
      case 'linked':
        return 'Linkedin';
      case 'spear':
        return 'Spear';
    }

    return id;
  }

  Data: CardDataModule[] = [
    new CardDataModule(
      1,
      'gmail',
      'Samule Robinson',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
      'this is description of somhing ',
      ['fb', 'gmail', 'twiter', 'linked', 'spear']
    ),
    new CardDataModule(
      2,
      'be',
      'Samule Robinson',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      'this is description of somhing asdf asdf asdf asdf asd fas dfas dfasdfasd fasdfasd fasdf asd fas df asdf as df asd fas dfasdf asdf asdf asd fasd fas fa sdf sd fs df asdf asdf asdf asd fas dfas dfasdfasd fasdfasd fasdf asd fas df asdf as df asd fas dfasdf asdf asdf asd fasd fas fa sdf sd fs df asdf asdf asdf asd fas dfas dfasdfasd fasdfasd fasdf asd fas df asdf as df asd fas dfasdf asdf asdf asd fasd fas fa sdf sd fs df asdf asdf asdf asd fas dfas dfasdfasd fasdfasd fasdf asd fas df asdf as df asd fas dfasdf asdf asdf asd fasd fas fa sdf sd fs df asdf',
      ['fb', 'gmail', 'linked', 'spear']
    ),
    new CardDataModule(
      3,
      'fb',
      'Samule Robinson',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
      'this is description of somhing ',
      ['fb', 'gmail', 'twiter', 'linked', 'spear']
    ),
    new CardDataModule(
      4,
      'twiter',
      'Samule Robinson',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      'this is description of somhing ',
      ['fb', 'gmail', 'twiter', 'linked', 'spear']
    ),
    new CardDataModule(
      5,
      'linked',
      'Samule Robinson',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
      'this is description of somhing ',
      ['fb', 'gmail', 'twiter', 'linked', 'spear']
    ),
    new CardDataModule(
      6,
      'spear',
      'Samule Robinson',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      'this is description of somhing ',
      ['fb', 'gmail', 'twiter', 'linked', 'spear']
    ),
    new CardDataModule(
      7,
      'blogger',
      'Samule Robinson',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s',
      'this is description of somhing ',
      ['fb', 'gmail', 'twiter', 'linked', 'spear']
    ),
    new CardDataModule(
      8,
      'pins',
      'Samule Robinson',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s',
      'this is description of somhing ',
      ['fb', 'gmail', 'twiter', 'linked', 'spear']
    ),
  ];

  onEditClick(id: number) {
    this.Data.forEach((ele, index) => {
      if (ele.id == id) this.currentEditingId = index;
    });

    this.selectedOrg = this.Data[this.currentEditingId].org;
    this.userProfileName = this.Data[this.currentEditingId].name;
    this.userProfileUrl = this.Data[this.currentEditingId].img;
    this.userProfileDes = this.Data[this.currentEditingId].des;
    this.userSelectedSocial = this.Data[this.currentEditingId].social;

    this.editDialogVisibility = !this.editDialogVisibility;
  }

  onEditData() {
    this.Data[this.currentEditingId].org = this.selectedOrg;
    this.Data[this.currentEditingId].name = this.userProfileName;
    this.Data[this.currentEditingId].img = this.userProfileUrl;
    this.Data[this.currentEditingId].des = this.userProfileDes;
    this.Data[this.currentEditingId].social = this.userSelectedSocial;

    this.editDialogVisibility = !this.editDialogVisibility;
  }

  onCheckboxChange(data: string) {
    let id = this.Data[this.currentEditingId].social.indexOf(data);
    if (id > -1) this.Data[this.currentEditingId].social.splice(id, 1);
    else this.Data[this.currentEditingId].social.push(data);
  }

  onDeleteClick() {
    let c = confirm('Confirm delete');
    if (!c) return;
    this.Data.splice(this.currentEditingId, 1);
    this.editDialogVisibility = !this.editDialogVisibility;
  }

  // constructor() {
  //   console.log(this.Data);
  // }

  contains(d: string) {
    return this.Data[this.currentEditingId].social.includes(d);
  }

  onClose() {
    this.editDialogVisibility = !this.editDialogVisibility;
  }
}
