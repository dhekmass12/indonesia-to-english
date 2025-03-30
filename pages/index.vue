<script>
    // Use a static import for server-side compatibility
    import '~/assets/css/app.css'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft'
    import { faFile } from '@fortawesome/free-regular-svg-icons/faFile'
</script>

<template>
    <div>
        <div class="w-4/5 space-y-12 m-auto">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3 col-span-full">
                    <label for="source-lang" class="block text-sm font-medium leading-6 text-gray-900">
                        Source: <Dropdown :set-lang="setSourceLang" :selected="sourceLang" :value-objs="sourceLangConstants" class="mr-1"/>
                    </label>
                    <div class="mt-2">
                        <textarea id="source-lang" name="source-lang" rows="3" 
                            :value="sourceText"
                            @input="event => sourceText = event.target.value"
                            class="block w-full rounded-md border border-black p-5 py-4 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                        >
                        </textarea>
                    </div>
                </div>

                <div class="sm:col-span-3 col-span-full">
                    <label for="dest-lang" class="block text-sm font-medium leading-6 text-gray-900">
                        Dest: <Dropdown :set-lang="setDestLang" :selected="destLang" :value-objs="destLangConstants"/></label>
                    <div class="mt-2">
                        <textarea disabled id="dest-lang" name="dest-lang" rows="3" 
                            :value="destText"
                            class="block w-full rounded-md border-0 p-5 py-4 text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                        >
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const sourceLang = ref(sourceLangConstants[0])
    const destLang = ref(destLangConstants[0])
    const sourceText = ref("")
    const destText = ref("")
    const order = ref(0)
    const lastOrder = ref(0)

    function setSourceLang(lang) {
        sourceLang.value = lang
    }
    function setDestLang(lang) {
        destLang.value = lang
    }
    function switchLang(){
        const temp = sourceLang.value
        setSourceLang(destLang.value)
        setDestLang(temp)
    }

    watch([sourceText, sourceLang, destLang], ([sourceText, sourceLang, destLang], [prevSourceText, prevSourceLang, prevDestLang]) => {
        order.value = order.value + 1
        order.value = order.value >= 1000 ? order.value % 1000 : order.value

        getTranslation(sourceText, order.value).then(result => {
            const order = result.order
            const newText = result.destText.data.value

            if (order > lastOrder.value){
                lastOrder.value = order
                destText.value = newText
            }
        })
    })
</script>
