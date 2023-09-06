import { Link, useNavigate } from "react-router-dom";
import deleteImage from "../../assets/delete.svg";
import editImage from "../../assets/edit.svg";
import { useDeleteVideoMutation } from "../../features/api/apiSlice";
import { useEffect } from "react";
import Error from "../ui/Error";

export default function Description({ video }) {
  const { id, title, description, date } = video;
  const navigate = useNavigate();

  const [deleteVideo, { isSuccess, isError }] = useDeleteVideoMutation();

  const handleDelete = () => {
    deleteVideo(id);
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess]);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b gap-4">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        <div className="flex gap-6 w-full justify-end">
          <div className="flex gap-1">
            <div className="shrink-0">
              <Link to={`/videos/edit/${id}`}>
                <img className="w-5 block" src={editImage} alt="Edit" />
              </Link>
            </div>
            <Link to={`/videos/edit/${id}`}>
              <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                Edit
              </span>
            </Link>
          </div>
          <div className="flex gap-1 cursor-pointer" onClick={handleDelete}>
            <div className="shrink-0">
              <Link to={`/videos/delete/${id}`}>
                <img className="w-5 block" src={deleteImage} alt="Delete" />
              </Link>
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
      {isError && <Error message="There was an Error to Delete the Video" />}
    </div>
  );
}
