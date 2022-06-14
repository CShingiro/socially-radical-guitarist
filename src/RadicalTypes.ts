export interface FormType {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface Audio {
  firstSongName: string;
  firstSongArtist: string;
  firstSongLink: string;
  secondSongName: string;
  secondSongArtist: string;
  secondSongLink: string;
  thirdSongName: string;
  thirdSongArtist: string;
  thirdSongLink: string;
  fourthSongName?: string;
  fourthSongArtist?: string;
  fourthSongLink?: string;
}

export interface Content {
  name: string;
  link: string;
}
