export const URL = "https://64da100fe947d30a260ab426.mockapi.io/food";
const MON_CHAY = true;
const CON_MON = true;
export function layTTTform() {
  let ma = document.getElementById("foodID").value;
  let ten = document.getElementById("tenMon").value;
  let loai = document.querySelector("#loai").value == "loai1";
  let giaMon = document.getElementById("giaMon").value * 1;
  let khuyenMai = document.querySelector("#khuyenMai").value * 1;
  let tinhTrang = document.querySelector("#tinhTrang").value == "1";
  let hinhMon = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    loai,
    giaMon,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa,
    giaKM: function () {
      return (this.giaMon * this.khuyenMai) / 100;
    },
  };
}

export let fetchFoodList = () => {
  axios({
    url: URL,
    method: "GET",
  })
    .then((res) => {
      renderList(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

let renderList = (list) => {
  let result = document.getElementById("tbodyFood");
  let contentHTML = "";
  list.reverse().forEach((item) => {
    let { ma, ten, loai, gia, khuyenMai, tinhTrang } = item;

    contentHTML +=
      /*html*/
      `<tr>
      <td>${ma}</td>
      <td>${ten}</td>
      <td>${loai == MON_CHAY ? "Chay" : "Mặn"}</td>
      <td>${gia}</td>
      <td>${khuyenMai}</td>
      <td>0</td>
      <td>${tinhTrang == CON_MON ? "Còn" : "Hết"}</td>
      <td>
      <button class="btn btn-info" onClick="editFood(${ma})">Sửa</button>
      <button class="btn btn-danger" onClick="deleteFood(${ma})">Xoá</button>
      </td>
    </tr>`;
  });
  result.innerHTML = contentHTML;
};
export let createFood = () => {
  axios({
    url: URL,
    method: "POST",
    data: food,
  })
    .then((res) => {
      console.log("post");
    })
    .catch((err) => {
      console.log(err);
    });
};

export let showMsg = (msg, isSuccess = true) => {
  Toastify({
    text: msg,
    style: {
      background: isSuccess ? "green" : "red",
    },
  }).showToast();
};

export let showTTLenForm = (monAn) => {
  let { ma, ten, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa, giaKM } = monAn;

  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;
  document.getElementById("loai").value = loai == MON_CHAY ? "loai1" : "loai2";
  document.getElementById("giaMon").value = giaMon;
  document.querySelector("#khuyenMai").value = khuyenMai;
  document.querySelector("#tinhTrang").value = tinhTrang == CON_MON ? "1" : "0";
  document.getElementById("hinhMon").value = hinhMon;
  document.getElementById("moTa").value = moTa;
  console.log(giaKM);
};
