export class About {
  public name: string;
  public alamat: string;
  public alamatk: string;
  public pekerjaan: string;
  public no_tlp: string;
  public ttl: string;
  public imagePath: string;
  constructor(name: string, ttl: string, alamat: string, alamatk: string, pekerjaan: string,
    no_tlp: string , imagePath: string) {
    this.name = name;
    this.alamat = alamat;
    this.alamatk = alamatk;
    this.pekerjaan = pekerjaan;
    this.no_tlp = no_tlp;
    this.ttl = ttl;
    this.imagePath = imagePath;
  }
}
