public class YoutubeController {
    
    public String body{set;get;}
    public List<MyOwnDataType> dataList{set;get;}
    public String searchText {set;get;}

    
    public void search(){
        
        dataList = new List<MyOwnDataType>();
        String localSearchText = searchText.replaceAll(' ', '+');
        //make the callout
        
        //1. Instantiate Http Class 
        Http h = new Http();
        
        //2. Frame the HttpRequest
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' + localSearchText + '&key=AIzaSyAMMLEqpsV8-L1zJmbQ1xY9b1z5n4PSA0E');
        req.setMethod('GET');
        req.setHeader('content-type', 'application/json');
        
        //3. Handle the HttpResponse
        HttpResponse res = h.send(req);
        
        body = res.getBody();
        
        fromJSON d = (fromJSON)JSON.deserialize(body, fromJSON.class);
        
        //I would need 5 records that I wish to display in the VF page
        //Custom records with each record having title, description, image url and etc
        for(Integer i = 0; i < d.items.size(); i++){
            
            //I will have to extract title, desc, published, url and create a new record
			//MyOwnDataType m = new MyOwnDataType(d.items[i].snippet.title, d.items[i].snippet.description,d.items[i].snippet.publishedAt, d.items[i].snippet.thumbnails.medium.url);
            System.debug(' 1 ' + d.items[i].snippet.title);
            System.debug(' 2 ' + d.items[i].snippet.description);
            System.debug(' 3 ' + d.items[i].snippet.publishedAt);
            System.debug(' 4 ' + d.items[i].snippet.thumbnails.medium.url); 
            //Add it to the list
            dataList.add(new MyOwnDataType(d.items[i].snippet.title, d.items[i].snippet.description,d.items[i].snippet.publishedAt, d.items[i].snippet.thumbnails.medium.url, d.items[i].id.videoId));
            
        }
        
    }
    
    //
    //Generated by AdminBooster
    //
    
    public class MyOwnDataType{
        public String title{set;get;}
        public String description{set;get;}
        public String publishedAt{set;get;}
        public String url{set;get;}
        public String videoId{set;get;}
        
        public MyOwnDataType(String newTitle, String newDescription, String newPublishedAt, String newUrl , String newvideoId){
            this.title = newTitle;
            this.description = newDescription;
            this.publishedAt = newPublishedAt;
            this.url = newUrl;
            this.videoId = newvideoId;
        }
        
    }
    
    public class fromJSON{
        public String kind;	//youtube#searchListResponse
        public String etag;	//h3-YsZsXOGkpO8BY8KPKWzRtK4A
        public String nextPageToken;	//CAUQAA
        public String regionCode;	//US
        public cls_pageInfo pageInfo;
        public cls_items[] items;
        
        
    }
    
    class cls_pageInfo {
        public Integer totalResults;	//848748
        public Integer resultsPerPage;	//5
    }
    class cls_items {
        public String kind;	//youtube#searchResult
        public String etag;	//jgJT5U2zkVIThJezBKwV8zTWSbE
        public cls_id id;
        public cls_snippet snippet;
    }
    class cls_id {
        public String kind;	//youtube#video
        public String videoId;	//ysIhQrC0E5c
    }
    class cls_snippet {
        public String publishedAt;	//2020-06-24T14:00:21Z
        public String channelId;	//UCE0ksmKZh8kp5ZSJmWKy_hw
        public String title;	//What is Salesforce (and why is it so good)?
        public String description;	//Salesforce is by far the most popular CRM tool for sales, support, and marketing teams worldwide. But what exactly is a CRM and why do practically all ...
        public cls_thumbnails thumbnails;
        public String channelTitle;	//David K. Liu
        public String liveBroadcastContent;	//none
        public String publishTime;	//2020-06-24T14:00:21Z
    }
    class cls_thumbnails {
        public cls_default default_x;
        public cls_medium medium;
        public cls_high high;
    }
    class cls_default {
        public String url;	//https://i.ytimg.com/vi/ysIhQrC0E5c/default.jpg
        public Integer width;	//120
        public Integer height;	//90
    }
    class cls_medium {
        public String url;	//https://i.ytimg.com/vi/ysIhQrC0E5c/mqdefault.jpg
        public Integer width;	//320
        public Integer height;	//180
    }
    class cls_high {
        public String url;	//https://i.ytimg.com/vi/ysIhQrC0E5c/hqdefault.jpg
        public Integer width;	//480
        public Integer height;	//360
    }
    
}