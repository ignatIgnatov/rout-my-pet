import * as petService from "../../services/petService";
import { useNavigate } from "react-router-dom";

const Create = (e) => {
const navigate = useNavigate();

  const onPetCreate = (e) => {
    e.preventDefault();
    let formDtata = new FormData(e.currentTarget);

    let name = formDtata.get("name");
    let description = formDtata.get("description");
    let imageUrl = formDtata.get("imageUrl");
    let type = formDtata.get("type");

    petService.create({
      name, 
      description, 
      imageUrl, 
      type
    })
      .then(result => {navigate("/dashboard")});
  };

  return (
    <section id="create-page" className="create">
      <form id="create-form" onSubmit={onPetCreate} method="POST">
        <fieldset>
          <legend>Add new Pet</legend>
          <p className="field">
            <label htmlFor="name">Name</label>
            <span className="input">
              <input type="text" name="name" id="name" placeholder="Name" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea
                name="description"
                id="description"
                placeholder="Description"
              ></textarea>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input
                type="text"
                name="imageUrl"
                id="image"
                placeholder="Image"
              />
            </span>
          </p>
          <p className="field">
            <label htmlFor="type">Type</label>
            <span className="input">
              <select id="type" name="type">
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="parrot">Parrot</option>
                <option value="reptile">Reptile</option>
                <option value="other">Other</option>
              </select>
            </span>
          </p>
          <input className="button submit" type="submit" value="Add Pet" />
        </fieldset>
      </form>
    </section>
  );
};

export default Create;
