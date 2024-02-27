import Rows from "../components/Rows";
const styles = require("../styles/names-details.module.css").default;

function NamesDetails({ allNamesData, allUsersData }: any) {
  return (
    <div className={styles["names-details"]}>
      <div className={styles["tables"]}>
        <p>Names</p>
        <p>Name Type</p>
        <p>Syllables</p>
        <p>Class Availability</p>
        <p>Sector</p>
        <p>Captured</p>
      </div>

      {Object.keys(allNamesData).map((name: any) => {
        return (
          <Rows
            rows={[
              name,
              allNamesData[name].Dropdown,
              allNamesData[name].Syllable,
              allNamesData[name].Trademarkability,
              "sector",
              "Captured",
            ]}
            navigate={name}
          />
        );
      })}
    </div>
  );
}

export default NamesDetails;
