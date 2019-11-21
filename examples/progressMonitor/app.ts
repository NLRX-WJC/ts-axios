import axios from "../../src/axios";

const instance = axios.create({
  onDownloadProgress: function(ProgressEvent) {
    const load = ProgressEvent.loaded;
    const total = ProgressEvent.total;
    const progress = (load / total) * 100;
    console.log(progress);
  },
  onUploadProgress: function(ProgressEvent) {
    const load = ProgressEvent.loaded;
    const total = ProgressEvent.total;
    const progress = (load / total) * 100;
    console.log(progress);
  }
});

const downloadBtn = document.getElementById("download");
downloadBtn!.onclick = function() {
  instance.get("/api/downloadFile");
};
const uploadBtn = document.getElementById("upload");
uploadBtn!.onclick = function() {
  const data = new FormData();
  const file = document.getElementById("file") as HTMLInputElement;
  if (file.files) {
    data.append("file", file.files[0]);
    instance.post("/api/uploadFile", data);
  }
};
