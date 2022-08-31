import { useReducer } from "react";

const initialFormState = {
  title: "",
  genre: "",
  releaseYear: 1900,
  description: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE FORM TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };

    default:
      return state;
  }
};

const Form = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleTextChange = (e) => {
    dispatch({
      type: "CHANGE FORM TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col">
          <div className="card">
            <h5 className="card-header">ADD A MOVIE</h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Movie Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    value={formState.title}
                    onChange={(e) => handleTextChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre:
                  </label>
                  <input
                    type="text"
                    name="genre"
                    id="genre"
                    className="form-control"
                    value={formState.genre}
                    onChange={(e) => handleTextChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="releaseYear" className="form-label">
                    Release Year:
                  </label>
                  <input
                    type="number"
                    name="releaseYear"
                    id="releaseYear"
                    className="form-control"
                    value={formState.releaseYear}
                    onChange={(e) => handleTextChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="form-control"
                    value={formState.description}
                    onChange={(e) => handleTextChange(e)}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <input
                    type="submit"
                    value="ADD MOVIE"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
