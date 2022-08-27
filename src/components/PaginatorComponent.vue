<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" @click="prev">Previous</a></li>
            <li class="page-item"><a class="page-link" @click="next">Next</a></li>
        </ul>
    </nav>
</template>

<script lang="ts">

import {ref, SetupContext, watch} from "vue";

export default {
    name: "PaginatorComponent",
    emits: ['page-changed'],
    props: {
        lastPage: Number
    },
    setup (props: any, context: SetupContext) { 
        const page = ref(1);


        watch(page, () => {
            context.emit('page-changed', page.value);
        });

        const next = async () => {
            if(page.value < props.lastPage) {
                page.value++;
            }
        }

        const prev = async () => {
            if(page.value > 1) {
                page.value--;
            }
        }

        return {
            next,
            prev
        };
    }
}
</script>