import { photos } from "./photos";
import { API_GET_RESPONSE } from "../actions/api";

describe("reducer photos", () => {
  it("remove duplicate ids", () => {
    const old_list = [
      {
        id: 1,
        title: "new image"
      },
      {
        id: 2,
        title: "new image"
      }
    ];

    const new_list = [
      {
        id: 1,
        title: "new image"
      },
      {
        id: 2,
        title: "new image"
      }
    ];

    expect(
      photos(
        { items: [] },
        {
          type: API_GET_RESPONSE,
          path: "/photos",
          response: new_list
        }
      )
    ).toEqual({
      loading: false,
      items: new_list
    });

    expect(
      photos(
        {
          items: old_list
        },
        {
          type: API_GET_RESPONSE,
          path: "/photos",
          response: new_list
        }
      )
    ).toEqual({
      loading: false,
      items: new_list
    });

    expect(
      photos(
        {
          items: old_list
        },
        {
          type: API_GET_RESPONSE,
          path: "/photos",
          response: [
            {
              id: 3,
              title: "new image"
            }
          ]
        }
      )
    ).toEqual({
      loading: false,
      items: [
        ...old_list,
        {
          id: 3,
          title: "new image"
        }
      ]
    });
  });
});
