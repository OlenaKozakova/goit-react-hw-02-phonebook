import PropTypes from "prop-types";


const Filter = ({ value, onChangeFilter }) => {
  return (
    <div >
      <label htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;