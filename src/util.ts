const courseId1 = "7da6fc1e-9b8b-41b5-a2aa-ebbad361e5f0";
const textbookversionId1 = "55ad472a-82a0-4314-b2f5-6d94dcba9ef0"
const courseId2 = "5d77dae0-c3b0-4d34-aab9-735f71c7d6db";
const textbookversionId2 = "10ff2017-6b3a-4396-8439-36e30b5a02e0"
const courseId3 = "282a036c-f945-4dcd-a733-4bae72b10685";
const textbookversionId3 = "10ff2017-6b3a-4396-8439-36e30b5a02e0"
const courseId4 = "baa7d0cd-cde0-47e7-8e21-facbfdf9a4cd";
const textbookversionId4 = "10ff2017-6b3a-4396-8439-36e30b5a02e0"
const courseId5 = "60faba39-2e8b-49a5-a401-06f7e3867803";
const textbookversionId5 = "428a527c-9ac2-4447-b8e8-d81fae9505ce";
const courseId8 = "eeef5cee-92c2-4e07-8045-3d5006b93100";
const textbookversionId8 = "10ff2017-6b3a-4396-8439-36e30b5a02e0";

export const subjectId = "b50f04b4-d4ee-42bb-ac3a-9a4a052ea984"

export const getAllSubjectIds = () => {
  return [[courseId1, textbookversionId1], [courseId2, textbookversionId2], [courseId3, textbookversionId3], [courseId4, textbookversionId4], [courseId5, textbookversionId5], [courseId8, textbookversionId8]]
}
export const getSubjectIdsParamStr = (courseCategoryId = "", textbookversionId = "") => {
  const formDataString = `pagination%5Brows%5D=50&pagination%5Bpage%5D=1&pagination%5Bsidx%5D=F_PageIndex+asc%2C+F_SubjectId+asc&pagination%5Bsord%5D=asc&courseCategoryId=${courseCategoryId}&textbookversionId=${textbookversionId}&subjectId=${subjectId}&textbookId=&chapterId=&keyword=&type=100`
  return formDataString
}

export const getAllCoursesParams = () => {
  const courseArr = getAllSubjectIds()
  return courseArr.map(courseConfig => {
    return getSubjectIdsParamStr(courseConfig[0], courseConfig[1])
  })
};