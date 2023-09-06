import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";

export default function Videos() {
  // --------------Commended Some Adcance Configuration-----------------
  // const {data:videos, isLoading, isError, error} = useGetVideosQuery(undefined, {
  //     refetchOnFocus: true, // When come back this tab. it'll fetch
  //     refetchOnMountOrArgChange: 5, // set 5 seconds to refresh
  //     refetchOnMountOrArgChange: true,
  //     refetchOnReconnect: true, // when internet connection complete
  //      pollingInterval: 5000, // refetch anfter 5000 miliseconds
  //     skip: true, // Skip Fetching videos for First time rendering.
  //                 //We can skip and use useEffect for fetching videos after rendering.
  // });

  const { data: videos, isLoading, isError, error } = useGetVideosQuery();

  let content = "";
  if (isLoading)
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  if (!isLoading && isError) content = <Error />;
  if (!isLoading && !isError && videos?.length === 0)
    content = <p>There is no data Found</p>;
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }

  return <>{content}</>;
}
