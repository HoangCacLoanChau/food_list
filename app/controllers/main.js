import { URL, fetchFoodList, layTTTform, showMsg, showTTLenForm } from "./controller.js";

fetchFoodList();

window.deleteFood = (id) => {
  axios
    .delete(`${URL}/${id}`)
    .then((res) => {
      //goi lai api va render
      fetchFoodList();
      showMsg("Thành Công", true);
      console.log(res);
    })
    .catch((err) => {
      showMsg("Đã có lỗi xảy ra", false);

      console.log(err);
    });
};

window.addFood = () => {
  let data = layTTTform();
  console.log("🚀 ~ addFood ~ data:", data);
  axios
    .post(URL, data)
    .then((res) => {
      console.log(res);
      showMsg("Thêm Thành Công");
      fetchFoodList();
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editFood = (id) => {
  $("#exampleModal").modal("show");
  document.getElementById("foodID").readOnly = true;
  //getElementById
  let url = `${URL}/${id}`;
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      showTTLenForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.updateFood = () => {
  var data = layTTTform();
  axios
    .put(`${URL}/${data.ma}`, data)
    .then((res) => {
      console.log(res);
      fetchFoodList();
      $("#exampleModal").modal("hide");
    })
    .catch((err) => {
      console.log(err);
    });
};
