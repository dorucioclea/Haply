import Mood, { MoodResponse } from "../models/mood";
import ApiService from "./ApiService";

const MoodService = {
  async createMood(userToken: string, mood: Mood): Promise<any> {
    try {
      const route =
        "https://us-central1-happiness-software.cloudfunctions.net/apisMoodsCreateV1";

      return ApiService(route, userToken, "POST", mood.string);
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getMoods(
    userToken: string,
    order?: string,
    limit?: number
  ): Promise<Mood[] | null> {
    try {
      const route =
        "https://us-central1-happiness-software.cloudfunctions.net/apisMoodsGetV1";

      let fullRoute: string = route;
      if (!!order || !!limit) fullRoute += "?";
      if (!!order) fullRoute += "order=" + order;
      if (!!order && !!limit) fullRoute += "&";
      if (!!limit) fullRoute += "limit=" + limit;

      const response = await ApiService(fullRoute, userToken, "GET");

      const moodResponses: MoodResponse[] = await response!.json();

      let moods: Mood[] = [];
      moodResponses.forEach((moodResponse: MoodResponse) => {
        moods.push(
          new Mood(
            moodResponse.data.value,
            moodResponse.data.userId,
            moodResponse.data.note,
            moodResponse.data.tags,
            moodResponse.data.date,
            moodResponse.id
          )
        );
      });
      return moods;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async deleteMood(userToken: string, moodId: string): Promise<any> {
    try {
      const route =
        "https://us-central1-happiness-software.cloudfunctions.net/apisMoodsDeleteV1";
      return await ApiService(route + "/" + moodId, userToken, "DELETE");
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getMoodsByDate(userToken: string, date: Date) {
    try {
      const startDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      const endDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      endDate.setDate(endDate.getDate() + 1);

      const route: string =
        "https://us-central1-happiness-software.cloudfunctions.net/apisMoodsGetV1?startdate=" +
        startDate.toISOString() +
        "&enddate=" +
        endDate.toISOString();

      const response = await ApiService(route, userToken, "GET");

      const moodResponses: MoodResponse[] = await response!.json();

      let moods: Mood[] = [];
      moodResponses.forEach((moodResponse: MoodResponse) => {
        moods.push(
          new Mood(
            moodResponse.data.value,
            moodResponse.data.userId,
            moodResponse.data.note,
            moodResponse.data.tags,
            moodResponse.data.date,
            moodResponse.id
          )
        );
      });
      return moods.reverse();
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default MoodService;
