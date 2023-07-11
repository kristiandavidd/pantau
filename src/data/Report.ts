class Report{
  time_stamp: Date;
  device : string;
  diagnosis : string;
  capture_img : Blob;

  constructor(
    time_stamp: Date,
    device : string,
    diagnosis : string,
    capture_img : Blob
  ){
    this.time_stamp = time_stamp;
    this.device = device;
    this.diagnosis = diagnosis;
    this.capture_img = capture_img;
  }
}

export default Report;