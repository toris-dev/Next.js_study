import axios from "axios";

const baseURL = `https://opentdb.com/api.php?amount=`;

export const getQuestionList = async (
  amount: number,
  difficulty: string
): Promise<any> => {
  try {
    const response = await axios.get(
      `${baseURL}${amount}&difficulty=${difficulty}&type=boolean`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(`Error retching the questions.${error}`);
  }
};
