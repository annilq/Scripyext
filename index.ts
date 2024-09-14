import { Cookie } from "./cookie";
import { getAllCoursesParams } from "./util";

const baseApi = "https://zj.jxeduyun.com/Web/";


const getAllCoursesIds = async () => {
  return getAllCoursesParams().map(params => getQuestionList(params)
    .then(ids => ids.map(id => {
      console.log(id);
      return fetchYuyue(id).then(console.log)
    })))
};

interface course {
  F_Status: number;
  F_UploadCount: number;
  F_MaxUploadCount: number;
  F_Id: string
}

const getQuestionList = async (formDataString: string) => {
  const response = await fetch(`${baseApi}GetPagerList`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Cookie,
    },
    body: formDataString
  });

  const result: { rows: course[] } = await response.json()

  if (result.rows.length > 0) {
    return result.rows
      // .filter((row: course) => row.F_UploadCount < row.F_MaxUploadCount && row.F_Status == 100)
      .map(item => item.F_Id)
  }
  return []
};

const fetchYuyue = async (id: string) => {
  const queryString = `entity%5BF_Status%5D=10&entity%5BF_SubId%5D=${id}&e=false`
  const response = await fetch(`${baseApi}yuyue`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Cookie,
    },
    body: queryString
  });

  return await response.json()
};

getAllCoursesIds()

setInterval(() => {
  getAllCoursesIds()
}, 2000)