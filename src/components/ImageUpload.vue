<template>
    <label class="btn btn-primary">
        Upload <input type="file" @change="upload($event.target.files)" hidden>
    </label>
</template>

<script lang="ts">
import axios from "axios";
import { SetupContext } from "vue";

export default {
    name: "ImageUpload",
    emits: ['uploaded'],
    setup (props: any, context: SetupContext) {
        const upload = async (files: FileList | null) => {
            if(files === null) return;

            const formData = new FormData();
            formData.append('image', files[0]);

            const {data} = await axios.post('upload', formData);

            context.emit('uploaded', data.url);
        };

        return {
            upload
        }
    }
}
</script>