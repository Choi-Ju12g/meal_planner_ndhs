export function MenuPlan(){

    return(
    <button type="button" onClick={() => {
        fetch('/api/data')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
      }}>get data</button>
  );
}
