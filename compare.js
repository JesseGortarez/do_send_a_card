<form class="create-card-form">
		
			
			<div class="pick-div">
				<h2>Choose your design</h2>
					<label><input type="radio" id="radio1" name="choice" value="Design 1" /><img src="img/thmb/pic.jpeg" /></label> &nbsp; &nbsp; &nbsp; &nbsp;
					<label><input type="radio" id="radio2" name="choice" value="Design 2"  /><img src="img/thmb/sunflower.jpg" /></label> &nbsp; &nbsp; &nbsp; &nbsp;
					<label><input type="radio" id="radio3" name="choice" value="Design 3"  /><img src="img/thmb/pic3.jpeg" /></label> &nbsp; &nbsp; &nbsp; &nbsp;
					<label><input type="radio" id="radio4" name="choice" value="Design 4"  /><img src="img/thmb/blank.png" /></label><br/>
			</div>
			
			<div class="message-div">
				
				<textarea placeholder="Enter your message" class="textarea1" name="messageText"></textarea>
				&nbsp; &nbsp; <span class="count1"></span><br>
				
				<input placeholder="Your name (optional)" type="text" name="name" value=<%= sessionStorage.name %> >
				<input placeholder="Your email (optional)" type="email" name="email" value=<%= sessionStorage.email %> >
				
				<a class="btn previewBtn">Preview</a>
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
			
		</form>
		
		
		
		
		
		
		<form class="edit-card-form">
			
			<div class="pick-div">
				<h2>Choose your design</h2>
					<label><input type="radio" name="choice" value="Design 1" /><img src="img/thmb/pic.jpeg" /></label> &nbsp; &nbsp; &nbsp; &nbsp;
					<label><input type="radio" name="choice" value="Design 2" /><img src="img/thmb/sunflower.jpg" /></label> &nbsp; &nbsp; &nbsp; &nbsp;
					<label><input type="radio" name="choice" value="Design 3" /><img src="img/thmb/pic3.jpeg" /></label> &nbsp; &nbsp; &nbsp; &nbsp;
					<label><input type="radio" name="choice" value="Design 4" /><img src="img/thmb/blank.png" /></label><br/>
			</div>
			
			<div class="message-div">
				
				<textarea class="textarea1" name="messageText"><%= sessionStorage.messageText %></textarea><br>
				&nbsp; &nbsp; <span class="count1"></span><br>
				<input placeholder="Your name (optional)" type="text" name="name" value=<%= sessionStorage.name %> >
				<input placeholder="Your email (optional)" type="email" name="email" value=<%= sessionStorage.email %> >
				
				<a class="btn previewEditBtn">Preview</a>
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
			
		</form>