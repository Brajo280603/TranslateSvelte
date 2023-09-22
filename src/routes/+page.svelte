<script>
	import { onMount } from "svelte";


	let language = [
		{value:"ar",text:"Arabic"},
		{value:"bn",text:"Bengali"},
		{value:"gu",text:"Gujrati"},
		{value:"hi",text:"Hindi"},
		{value:"ja",text:"Japanese"},
		{value:"kn",text:"Kannada"},
		{value:"ko",text:"Korean"},
		{value:"ml",text:"Malayalam"},
		{value:"mr",text:"Marathi"},
		{value:"ne",text:"Nepali"},
		{value:"pa",text:"Punjabi"},
		{value:"ru",text:"Russian"},
		{value:"ta",text:"Tamil"},
		{value:"ur",text:"Urdu"}
	]

	let inputValue;
	let translateToValue;
	let outputValue;
	let searched = false;

		async function translateText(){
			
		
					let res = await fetch("/translate",{
					method: 'POST',
					body: JSON.stringify({ 
						text:inputValue,
						translateTo:translateToValue
					}),
					headers: {
						'content-type': 'application/json'
					}
				});

				// console.log(await res.json())
				// console.log(await res.body.text())
				


				outputValue = res.json();
				// console.log(await res.json())

				searched = true;
	
	}

	

</script>

<div class="magicpattern">
	<div class="h-full w-full  flex items-center justify-center">
		<div class=" glass h-[36rem] w-[36rem]">
			<div class="flex flex-col gap-12 items-center p-5">
				<textarea bind:value={inputValue} type="text" class="variant-ghost-primary w-96 rounded-xl px-4 py-2" rows="5" style="resize: none;"></textarea>
				<select bind:value={translateToValue} name="" id="" class="variant-ghost-secondary  h-10 w-60 px-4 rounded-xl hover:cursor-pointer">
					<option class="variant-filled-surface" disabled selected>Select Language</option>
					{#each language as lang }
						<option class="variant-filled-surface" value={lang.value}>{lang.text}</option>
					{/each}
				</select>

				<button on:click={inputValue != undefined && translateToValue != undefined?translateText:null} class="variant-filled-success h-10 w-40 rounded-xl">Translate</button>

				{#if searched == true }
					{#await outputValue}
						<textarea disabled value="Please Wait...." type="text" class="variant-ghost-warning w-96 rounded-xl px-4 py-2" rows="5" style="resize: none;"></textarea>	
					{:then outputValue} 
						<textarea disabled value={outputValue} type="text" class="select-all variant-ghost-success w-96 rounded-xl px-4 py-2" rows="5" style="resize: none;"></textarea>
					{:catch error}
						<textarea disabled value={"Error! Try Again..."} type="text" class="variant-ghost-error w-96 rounded-xl px-4 py-2" rows="5" style="resize: none;"></textarea>
					{/await}
				{:else}
					<textarea disabled type="text" class="variant-ghost-primary w-96 rounded-xl px-4 py-2" rows="5" style="resize: none;"></textarea>
				{/if}
				
			</div>
		</div>
	</div>
</div>