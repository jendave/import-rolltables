import { UserData } from '../importForm';

export async function processItemInput({ jsonfile, clipboardInput }: UserData) {
  if (clipboardInput) {
    console.log(`Cliboard input: ${clipboardInput}`);
  }
}
