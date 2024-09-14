"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCoursesParams = exports.getSubjectIdsParamStr = exports.getAllSubjectIds = exports.subjectId = void 0;
var courseId1 = "7da6fc1e-9b8b-41b5-a2aa-ebbad361e5f0";
var textbookversionId1 = "55ad472a-82a0-4314-b2f5-6d94dcba9ef0";
var courseId2 = "5d77dae0-c3b0-4d34-aab9-735f71c7d6db";
var textbookversionId2 = "10ff2017-6b3a-4396-8439-36e30b5a02e0";
var courseId3 = "282a036c-f945-4dcd-a733-4bae72b10685";
var textbookversionId3 = "10ff2017-6b3a-4396-8439-36e30b5a02e0";
var courseId4 = "baa7d0cd-cde0-47e7-8e21-facbfdf9a4cd";
var textbookversionId4 = "10ff2017-6b3a-4396-8439-36e30b5a02e0";
var courseId5 = "60faba39-2e8b-49a5-a401-06f7e3867803";
var textbookversionId5 = "428a527c-9ac2-4447-b8e8-d81fae9505ce";
var courseId8 = "eeef5cee-92c2-4e07-8045-3d5006b93100";
var textbookversionId8 = "10ff2017-6b3a-4396-8439-36e30b5a02e0";
exports.subjectId = "b50f04b4-d4ee-42bb-ac3a-9a4a052ea984";
var getAllSubjectIds = function () {
    return [[courseId1, textbookversionId1], [courseId2, textbookversionId2], [courseId3, textbookversionId3], [courseId4, textbookversionId4], [courseId5, textbookversionId5], [courseId8, textbookversionId8]];
};
exports.getAllSubjectIds = getAllSubjectIds;
var getSubjectIdsParamStr = function (courseCategoryId, textbookversionId) {
    if (courseCategoryId === void 0) { courseCategoryId = ""; }
    if (textbookversionId === void 0) { textbookversionId = ""; }
    var formDataString = "pagination%5Brows%5D=50&pagination%5Bpage%5D=1&pagination%5Bsidx%5D=F_PageIndex+asc%2C+F_SubjectId+asc&pagination%5Bsord%5D=asc&courseCategoryId=".concat(courseCategoryId, "&textbookversionId=").concat(textbookversionId, "&subjectId=").concat(exports.subjectId, "&textbookId=&chapterId=&keyword=&type=100");
    return formDataString;
};
exports.getSubjectIdsParamStr = getSubjectIdsParamStr;
var getAllCoursesParams = function () {
    var courseArr = (0, exports.getAllSubjectIds)();
    return courseArr.map(function (courseConfig) {
        return (0, exports.getSubjectIdsParamStr)(courseConfig[0], courseConfig[1]);
    });
};
exports.getAllCoursesParams = getAllCoursesParams;
