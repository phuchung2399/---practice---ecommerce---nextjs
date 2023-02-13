export class NavData {
  id: string;
  name: string;
  url: string;

  constructor(navName: string) {
    this.name = navName;
    this.id = "id" + Math.random().toString(16).slice(2);

    this.url =
      "/" +
      navName
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
  }
}
