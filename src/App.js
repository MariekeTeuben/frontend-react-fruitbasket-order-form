import React, {useState} from 'react';
import './App.css';

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [postalcode, setPostalcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('weekly');
    const [deliveryMoment, toggleDeliveryMoment] = useState('');
    const [remarks, setRemarks] = useState('');
    const [checkedTerms, toggleCheckedTerms] = useState(false);


    function reset(){
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Voornaam: ${firstname},
            Achternaam: ${lastname},
            Leeftijd: ${age},
            Postcode: ${postalcode},
            Bezorgfrequentie: ${deliveryFrequency}
            Bezorgmoment: ${deliveryMoment}
            Opmerkingen: ${remarks}
        `)
    }

    return (
    <>
      <h1>Fruitmand bezorgservice</h1>

    <article>
        <h2>🍓 Aardbeien</h2>
        <button type="button" disabled={strawberries === 0} onClick={() => setStrawberries(strawberries - 1)}>
            -
        </button>
        <p>{strawberries}</p>
        <button type="button" onClick={() => setStrawberries(strawberries + 1)}>
            +
        </button>
    </article>

        <article>
            <h2>🍌 Bananen</h2>
            <button type="button" disabled={bananas === 0} onClick={() => setBananas(bananas - 1)}>
                -
            </button>
            <p>{bananas}</p>
            <button type="button" onClick={() => setBananas(bananas + 1)}>
                +
            </button>
        </article>

        <article>
            <h2>🍏 Appels</h2>
            <button type="button" disabled={apples === 0} onClick={() => setApples(apples - 1)}>
                -
            </button>
            <p>{apples}</p>
            <button type="button" onClick={() => setApples(apples + 1)}>
                +
            </button>
        </article>

        <article>
            <h2>🥝 Kiwi's</h2>
            <button type="button" disabled={kiwis === 0} onClick={() => setKiwis(kiwis - 1)}>
                -
            </button>
            <p>{kiwis}</p>
            <button type="button" onClick={() => setKiwis(kiwis + 1)}>
                +
            </button>
        </article>

        <button type="button" onClick={() => reset()}>
            Reset
        </button>

        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname-field">
                Voornaam
                <input
                    name="firstname"
                    type="text"
                    id="firstname-field"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    />
            </label>

            <label htmlFor="lastname-field">
                Achternaam
                <input
                    name="lastname"
                    type="text"
                    id="lastname-field"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </label>

            <label htmlFor="age-field">
                Leeftijd
                <input
                    name="age"
                    type="text"
                    id="age-field"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>

            <label htmlFor="postalcode-field">
                Postcode
                <input
                    name="age"
                    type="text"
                    id="postalcode-field"
                    value={postalcode}
                    onChange={(e) => setPostalcode(e.target.value)}
                />
            </label>

            <label htmlFor="deliveryfrequency-field">
                Bezorgfrequentie
                <select
                    name="deliveryfrequency"
                    id="deliveryfrequency-field"
                    value={deliveryFrequency}
                    onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                >
                    <option value="Iedere week">Iedere week</option>
                    <option value="Om de week">Om de week</option>
                    <option value="Iedere maand">Iedere maand</option>
                </select>
            </label>

            <label htmlFor="deliverymoment-field">
                <input
                    name="deliverymoment"
                    type="radio"
                    id="deliverymoment-field"
                    value="Overdag"
                    onChange={(e) => toggleDeliveryMoment(e.target.value)}
                />
                Overdag
                <input
                    name="deliverymoment"
                    type="radio"
                    id="deliverymoment-field"
                    value="'s Avonds"
                    onChange={(e) => toggleDeliveryMoment(e.target.value)}
                />
                's Avonds
            </label>

            <label htmlFor="remarks-field">
                Opmerkingen
                <textarea
                    name="opmerkingen"
                    id="remarks-field"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                />
            </label>

            <label htmlFor="terms-and-conditions">
                <input
                    type="checkbox"
                    name="terms-and-conditions"
                    id="terms-and-conditions"
                    checked={checkedTerms}
                    onChange={() => toggleCheckedTerms(!checkedTerms)}
                />
                Ik ga akkoord met de algemene voorwaarden
            </label>



            <button
                disabled={checkedTerms === false}
                type="submit"
            >
                Verzend
            </button>

        </form>


    </>
  );
}

export default App;
