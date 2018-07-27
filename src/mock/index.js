import Mock from "mockjs";
let debug = 0;
if (debug) {
  Mock.mock(/login/, {
    data: {
      userId: "@integer(1,10)",
      "userName|1": ["鲁班七号", "后裔", "蔡文姬", "王昭君", "妲己", "铠"],
      token: "@string(30)"
    },
    msg: "Success",
    status: 1
  });
  Mock.mock(/faceLibraryDetails/, {
    status: 1,
    msg: "success",
    data: {
      pageSize: 2,
      faceInfoList: [
        {
          department: "\u65e0",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 73,
          phoneNumber: "8705365325453",
          personName: "\u65e0",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u6280\u672f",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 74,
          phoneNumber: "12345687912",
          personName: "nihao",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u6280\u672f",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 75,
          phoneNumber: "12345678912",
          personName: "\u4f60\u59b9",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u65e0",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 76,
          phoneNumber: "1486087337553",
          personName: "\u6280\u672f",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u65e0",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 77,
          phoneNumber: "1527080508075",
          personName: "\u65e0",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u65e0",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 78,
          phoneNumber: "20161212090835717",
          personName: "\u65e0",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u65e0",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 79,
          phoneNumber: "13242971435_0",
          personName: "\u65e0",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u65e0",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 80,
          phoneNumber: "161230185104",
          personName: "\u65e0",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u65e0",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 81,
          phoneNumber: "1527075387782",
          personName: "\u65e0",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        },
        {
          department: "\u65e0",
          faceImgSrc:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=1a3d82d42f2dd42a4b0409f9625230d0/314e251f95cad1c86a912b9a753e6709c93d5161.jpg",
          faceImgID: 82,
          phoneNumber: "89865465450",
          personName: "\u65e0",
          faceLibraryName: "test1-1321",
          idnumber: "420281199908027217",
          remark: ""
        }
      ],
      pagePresent: null,
      pageCount: 10
    }
  });
}
