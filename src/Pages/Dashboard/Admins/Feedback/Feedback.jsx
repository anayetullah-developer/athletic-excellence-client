import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Feedback = () => {
    const feedbackClass = useLoaderData();
    const [axiosSecure] = useAxiosSecure();

    const handleFeedback = async (e) => {
        e.preventDefault();
        const id = feedbackClass._id;
        const adminFeedback = e.target.feedback.value;
        const response = await axiosSecure.patch(`/instructor/feedbackClass/${id}`, {
           adminFeedback
        })
        console.log(response);
      };

  return (
    <div>
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleFeedback} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6">Admin Feedback</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="feedback"
            >
              Feedback
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="feedback"
              name="feedback"
              rows="5"
              placeholder="Enter your feedback"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
