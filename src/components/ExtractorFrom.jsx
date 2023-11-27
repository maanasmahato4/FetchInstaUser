// packages and libraries
import { Form, useForm } from "@mantine/form"; // mantine
import { TextInput, Button } from "@mantine/core"; // mantine

// custom hooks
import { useExtractor } from "../hooks/useExtractor";

function ExtractorFrom() {
  const URL_REGEX = /^[A-Za-z]+:\/\/w+\.instagram\.com\/.*$/i;
  const { extractUserName, userName, extractorError } = useExtractor();

  const form = useForm({
    initialValues: {
      url: ''
    },
    validate: {
      url: (value) => (URL_REGEX.test(value) ? null : "Invalid instagram url")
    }
  })

  function handleSubmit(values) {
    extractUserName(values.url);
  }
  return (
    <div>
      <form onSubmit={form.onSubmit((values) => { handleSubmit(values) })}>
        <TextInput
          label="Instagram Link"
          placeholder="example: https://www.instagram.com/johndoe"
          name="instagram_url"
          {...form.getInputProps('url')}
        />
        <Button type="submit" style={{ marginBlock: "1rem" }}>Submit</Button>
      </form>
      <div>
        <h3>{
          !userName && !extractorError
            ?
            "Enter an instagram url"
            :
            !userName && extractorError
              ?
              extractorError
              :
              userName
        }</h3>
      </div>
    </div>
  );
};

export default ExtractorFrom;