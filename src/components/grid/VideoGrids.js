import React, { useEffect } from "react";
import VideoGridItems from "./VideoGridItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/VideosSlice";
import Loading from "../../components/ui/Loading"

function VideoGrids() {
  const dispatch = useDispatch();

  const {videos, isLoading, isError, error} = useSelector((state) => state.videos);

  const {tags, search} = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({tags, search}))
  }, [dispatch, tags, search])
  let content;

  if(isLoading)
    content = <Loading />
    if(!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if(!isLoading && !isError && videos?.length > 0){
      content = videos.map(video => <VideoGridItems video={video} key={video.id} />)
    }
    if(!isLoading && !isError && videos?.length === 0){
      content = <div className="col-span-12">No Video Found</div>
    }
  return (
    <section className="">
      <section className="pt-8">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
}

export default VideoGrids;
