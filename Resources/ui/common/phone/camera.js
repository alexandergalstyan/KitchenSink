function camera(_args) {
	var self = Ti.UI.createWindow();
	// create table view data object
	var data = [
		{title:'Camera Basic', hasChild:true, test:'ui/common/phone/camera_basic'}
	];
	
	if (Ti.Platform.osname == "iphone") {
		data.push({title:'Camera Custom Overlay', hasChild:true, test:'ui/handheld/ios/phone/camera_overlay'});
		data.push({title:'Camera Overlay Webview', hasChild:true, test:'ui/handheld/ios/phone/camera_overlay_webview'});
		data.push({title:'Camera Augmented Reality', hasChild:true, test:'ui/handheld/ios/phone/camera_ar'});
		data.push({title:'Save to Gallery (Auto)', hasChild:true, test:'ui/handheld/ios/phone/camera_gallery'});
		data.push({title:'Save to File', hasChild:true, test:'ui/handheld/ios/phone/camera_file'});	
	
		Ti.include('/etc/version.js');
		
		if (isiOS4Plus())
		{
			data.push({title:'Video Record', hasChild:true, test:'ui/handheld/ios/phone/camera_video'});	
			
			//TODO: this seems to work the first time, but not subsequent. fix for 1.5
			//data.push({title:'Video Editing', hasChild:true, test:'ui/common/phone/video_edit'});	
		}
	}
	
	// create table view
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test),
				win = new ExampleWindow();
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	self.add(tableview);
	return self;
};

module.exports = camera;

