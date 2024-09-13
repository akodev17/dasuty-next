// import Details from './Details';
// import Metadata from './Metadata';
// import Content from './Content';
// import Sidebar from './Sidebar';
// import news from '@data/SinglePost/all-news.json';
// import newsRTL from '@data/SinglePost/all-news-rtl.json';
import axios from "axios";
import React from "react";
// import { useParams } from 'next/navigation'
const AllNews = async ({  params  }) => {
  let id = params.id;
  let data = await axios.get(
    `http://localhost:1337/api/blogs/${id}?populate=*`
  );
  let response = data.data.data;
  let description = response.attributes.description;
  console.log(description);
  return (
  <>
    <div className="container mx-auto xl:max-w-[1100px] pt-[15px]">
    <div className="h-[250px] w-full">
      <img
        src={`http://localhost:1337${response.attributes.image.data.attributes.url}`}
        alt=""
        className="w-full h-[100%] object-cover"
      />
    </div>
    <div
      className="text-white pt-[20px] pb-[40px]"
      dangerouslySetInnerHTML={{ __html: `${description}` }}
    ></div>
  </div>
  </>

    // <section className="all-news section-padding pt-50 blog bg-transparent style-3">
    //   <div className="container">
    //     <Details details={{ title: data.title, time: data.time, type: data.type }} style={style} rtl={rtl} />
    //     <div className="row gx-4 gx-lg-5">
    //       {
    //         !isWide && leftSidebar && (<Sidebar data={data.sidebar} style={style} rtl={rtl} />)
    //       }
    //       <div className={isWide ? 'col-lg-12':'col-lg-8'}>
    //         <Metadata metadata={{ imgLetter: data.imgLetter, user: data.user, commentsCount: data.commentsCount, viewsCount: data.viewsCount }} rtl={rtl} />
    //         <div className="blog-content-info">
    //           <Content style={style} rtl={rtl} />
    //           {/* <Comments comments={data.comments} commentCard={data.commentCard} style={style} rtl={rtl} /> */}
    //         </div>
    //       </div>
    //       {/* {
    //         !isWide && !leftSidebar && (<Sidebar data={data.sidebar} style={style} rtl={rtl} />)
    //       } */}
    //     </div>
    //   </div>
    // </section>
  )
}

export default AllNews