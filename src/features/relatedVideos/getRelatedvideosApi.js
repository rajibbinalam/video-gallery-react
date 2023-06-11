import axiosInstance from "../../utils/axios";

export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;
  const quesryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `&id_ne=${id}&_limit=${limit}`;

  const res = await axiosInstance.get(`/videos?${quesryString}`);
  return res.data;
};
