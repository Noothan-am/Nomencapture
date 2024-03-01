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
        <p>Captured</p>
      </div>

      {allNamesData &&
        Object.keys(allNamesData).map((email: any) => {
          return (
            <Rows
              rows={[
                email,
                allNamesData[email].Dropdown,
                allNamesData[email].Syllable,
                allNamesData[email].Trademarkability,
                allNamesData[email]["Captured"],
              ]}
              navigate={`/admin/name/${allNamesData[email].Name}`}
            />
          );
        })}
    </div>
  );
}

export default NamesDetails;
