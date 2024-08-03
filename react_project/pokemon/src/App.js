import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [api, setApi] = useState(
    "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
  );
  const [lists, setList] = useState([]);
  const [getModal, setModal] = useState(false);
  const [getId, setId] = useState(0);

  const fetchData = async () => {
    try {
      const respose = await fetch(api);
      const data = await respose.json();
      console.log(data[0].next);
      setApi(data[0].next);
      let list = data[0].results;
      console.log(list);

      for await (let obj of list) {
        let responsePokeMon = await fetch(obj.url);
        let pokeMonData = await responsePokeMon.json();
        console.log(pokeMonData);
        setList((prev) => [...prev, pokeMonData[0]]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const nextLoadData = ()=>{
    fetchData();
  }

  function modalEventHandler(id) {
    console.log(id);
    setId(id);
    setModal((prev) => !prev);
  }

  return (
    <div className="parent">
      <div id="section">
        <div className="content">
            <h2>PokemoN</h2>
            <h2>PokemoN</h2>
        </div>
        <div className="content2">
            <h2>KingdoM</h2>
            <h2>KingdoM</h2>
        </div>
      </div>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {lists.map((obj, index) => (
              <div key={index} className={`thumb-container ${obj.type}`}>
                <div className="number">
                  <small>#{obj.id}</small>
                </div>
                <img src={obj.image} alt={obj.name} />
                <div className="detail-wrapper">
                  <h3>{obj.name.toUpperCase()}</h3>
                  <small>Type: {obj.type}</small>
                  <button
                    onClick={() => modalEventHandler(index)}
                    className="pokeinfo"
                  >
                    know more...
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="load-more" onClick={nextLoadData}>More pokemons</button>
        </div>
      </div>
      {getModal && (
        <div className={`expanded-overelay ${lists[getId].type} visible`}>
          <button onClick={modalEventHandler} className="close-button normal">
            x
          </button>
          <div className="expanded-left">
            <img
              className="expanded-image"
              src={lists[getId].image}
              alt={lists[getId].name}
            />
            <h3 className="expanded-name">{lists[getId].name}</h3>
          </div>
          <div className={`expanded-right ${lists[getId].type}`}>
            <table className={`expanded-table ${lists[getId].type}`}>
              <tbody>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>weight:</td>
                          <td>{lists[getId].weight}</td>
                        </tr>
                        <tr>
                          <td>height:</td>
                          <td>{lists[getId].height}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>stat1:</td>
                          <td>{lists[getId].stats[0].stat.name}</td>
                        </tr>
                        <tr>
                          <td>stat2:</td>
                          <td>{lists[getId].stats[1].stat.name}</td>
                        </tr>
                        <tr>
                          <td>stat3:</td>
                          <td>{lists[getId].stats[2].stat.name}</td>
                        </tr>
                        <tr>
                          <td>stat4:</td>
                          <td>{lists[getId].stats[3].stat.name}</td>
                        </tr>
                        <tr>
                          <td>stat5:</td>
                          <td>{lists[getId].stats[4].stat.name}</td>
                        </tr>
                        <tr>
                          <td>stat6:</td>
                          <td>{lists[getId].stats[5].stat.name}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>BS1:</td>
                          <td>{lists[getId].stats[0].base_stat}</td>
                        </tr>
                        <tr>
                          <td>BS2:</td>
                          <td>{lists[getId].stats[1].base_stat}</td>
                        </tr>
                        <tr>
                          <td>BS3:</td>
                          <td>{lists[getId].stats[2].base_stat}</td>
                        </tr>
                        <tr>
                          <td>BS4:</td>
                          <td>{lists[getId].stats[3].base_stat}</td>
                        </tr>
                        <tr>
                          <td>BS5:</td>
                          <td>{lists[getId].stats[4].base_stat}</td>
                        </tr>
                        <tr>
                          <td>BS6:</td>
                          <td>{lists[getId].stats[5].base_stat}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
