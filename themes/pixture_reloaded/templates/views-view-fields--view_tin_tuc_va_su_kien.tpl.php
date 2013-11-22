   <?php //dpm($fields); //label_html?>
	 <div class = "tieu-de"> <?php  print $fields['title']->content;?> </div>
   <div class = "anh"> <?php print $fields['field_tin_tuc_hinh_anh']->content;?> </div>
   
   <div class = "noi-dung"> <?php print $fields['body']->content;?> </div>
   <div class = "link"> <?php print $fields['view_node_1']->content;?> </div>
   <!--
	 <span class="tin-tuc-su-kien">
            <span class="tieu-de">
              <?php print $fields['field_tin_tuc_hinh_anh']->content;?>
							<?php  print $fields['title']->content;?>
            </span>
            <span class="noi-dung">
						<?php print $fields['body']->content;?>
						</span>
            <span class = "link">
            <?php print $fields['view_node_1']->content;?>
            </span>
            
           
  </span>
	  -->
		<?php foreach ($fields as $id=> $field): ?>
	      <?php if (!empty($field->separator)): ?>
        <?php print $field->separator; ?>
      <?php endif; ?>
      <?php print $field->wrapper_prefix; ?>
        <?php //print $field->label_html; ?>
       
      <?php print $field->wrapper_suffix; ?>
    <?php endforeach; ?>