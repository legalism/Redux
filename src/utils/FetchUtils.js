/**
 * Created by pm on 17-10-19.
 */
export function fetchData(start = 0, count = 6, action: Function) {
  return (api) => {
    return (dispatch) => {
      // dispatch({type: TYPES.FETCH_MOVE_LIST});
      fetch(`${api}?start=${start}&count=${count}`)
        .then((response) => response.text())
        .then((responseText) => {
          const json = JSON.parse(responseText);
          console.log("json=" + `${json.subjects}`);
          return json;
        }).then((data) => {
        dispatch(action(data));
      }).catch((error) => {
        console.error(error.message);
        // dispatch({type: TYPES.FETCH_MOVE_LIST, error: error});
      });
    };
  };

}