import App from "../controllers/App/App";
import { Forecast, Filter, Grid, Region } from "../components";

const host = "http://api.ipma.pt/open-data";

const page = (path) => ({
  path,
  component: App,
  exact: false,
  components: [
    {
      component: Filter,
      props: {
        name: "impaList",
        url: `${host}/distrits-islands`,
      },
    },
    {
      component: Grid,
      props: {
        columnsTemplate: [4, 8],
        children: [
          {
            component: Region,
            props: {
              list: {
                name: "impaList",
                url: `${host}/distrits-islands`,
              },
              detail: {
                name: "impaDetail",
                url: `${host}/forecast/meteorology/cities/daily/`,
              },
            },
          },
          {
            component: Forecast,
            props: {
              id: "details",
              name: "impaDetail",
            },
          },
        ],
      },
    },
  ],
});

export default page;
